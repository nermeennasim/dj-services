// src/utils/validation.ts

// Country phone number configurations
export const phoneCountries = [
  {
    code: "GT",
    name: "Guatemala",
    dialCode: "+502",
    format: "(####) ####",
    placeholder: "(5555) 1234",
    digitCount: 8
  },
  {
    code: "MX", 
    name: "Mexico",
    dialCode: "+52",
    format: "## #### ####",
    placeholder: "55 1234 5678",
    digitCount: 10
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    format: "(###) ###-####",
    placeholder: "(555) 123-4567",
    digitCount: 10
  }
];

// Basic validation functions
export const validateName = (name: string): string => {
  if (!name.trim()) return "Full name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  if (name.trim().length > 50) return "Name must be less than 50 characters";
  if (!/^[a-zA-Z\s'-]+$/.test(name.trim()))
    return "Name can only contain letters, spaces, hyphens, and apostrophes";
  return "";
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) return "Email address is required";
  if (email.length > 100) return "Email must be less than 100 characters";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

export const validatePhone = (phone: string, countryCode: string): string => {
  if (!phone.trim()) return ""; // Phone is optional
  
  const digitsOnly = phone.replace(/\D/g, "");
  const country = phoneCountries.find(c => c.code === countryCode);
  
  if (!country) {
    if (digitsOnly.length < 8) return "Phone number must be at least 8 digits";
    if (digitsOnly.length > 15) return "Phone number must be less than 15 digits";
    return "";
  }
  
  if (digitsOnly.length < country.digitCount) {
    return `${country.name} phone number must be ${country.digitCount} digits`;
  }
  if (digitsOnly.length > country.digitCount) {
    return `${country.name} phone number must be exactly ${country.digitCount} digits`;
  }
  
  return "";
};

export const validateMessage = (message: string, maxLength: number = 500): string => {
  if (message.length > maxLength) return `Message must be less than ${maxLength} characters`;
  return "";
};

export const validateRequired = (value: string, fieldName: string): string => {
  if (!value.trim()) return `${fieldName} is required`;
  return "";
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): string => {
  if (value.trim().length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return "";
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): string => {
  if (value.length > maxLength) {
    return `${fieldName} must be less than ${maxLength} characters`;
  }
  return "";
};

// Phone formatting functions
export const formatPhoneNumber = (value: string, countryCode: string): string => {
  const digitsOnly = value.replace(/\D/g, "");
  
  switch (countryCode) {
    case "US":
      // US format: (XXX) XXX-XXXX
      if (digitsOnly.length >= 10) {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
      } else if (digitsOnly.length >= 6) {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
      } else if (digitsOnly.length >= 3) {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
      }
      return digitsOnly;

    case "GT":
      // Guatemala format: (XXXX) XXXX
      if (digitsOnly.length >= 8) {
        return `(${digitsOnly.slice(0, 4)}) ${digitsOnly.slice(4, 8)}`;
      } else if (digitsOnly.length >= 4) {
        return `(${digitsOnly.slice(0, 4)}) ${digitsOnly.slice(4)}`;
      }
      return digitsOnly;

    case "MX":
      // Mexico format: XX XXXX XXXX
      if (digitsOnly.length >= 10) {
        return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 6)} ${digitsOnly.slice(6, 10)}`;
      } else if (digitsOnly.length >= 6) {
        return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 6)} ${digitsOnly.slice(6)}`;
      } else if (digitsOnly.length >= 2) {
        return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2)}`;
      }
      return digitsOnly;

    default:
      return digitsOnly;
  }
};

// Get country data helper
export const getCountryData = (countryCode: string) => {
  return phoneCountries.find(c => c.code === countryCode) || phoneCountries[2]; // Default to US
};

// Create full international phone number
export const formatInternationalPhone = (phone: string, countryCode: string): string => {
  if (!phone.trim()) return "";
  const country = getCountryData(countryCode);
  return `${country.dialCode} ${phone}`;
};

// Validation helpers for forms
export const createFieldValidator = (validationRules: Array<(value: string) => string>) => {
  return (value: string): string => {
    for (const rule of validationRules) {
      const error = rule(value);
      if (error) return error;
    }
    return "";
  };
};

// Pre-built field validators
export const nameValidator = createFieldValidator([
  (value) => validateRequired(value, "Full name"),
  (value) => validateMinLength(value, 2, "Name"),
  (value) => validateMaxLength(value, 50, "Name"),
  (value) => !/^[a-zA-Z\s'-]+$/.test(value.trim()) && value.trim() ? "Name can only contain letters, spaces, hyphens, and apostrophes" : ""
]);

export const emailValidator = createFieldValidator([
  (value) => validateRequired(value, "Email address"),
  (value) => validateMaxLength(value, 100, "Email"),
  (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value) && value.trim() ? "Please enter a valid email address" : "";
  }
]);

export const messageValidator = (maxLength: number = 500) => createFieldValidator([
  (value) => validateMaxLength(value, maxLength, "Message")
]);

// Form validation helper
export const validateForm = (formData: Record<string, any>, validators: Record<string, (value: any, ...args: any[]) => string>): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.keys(validators).forEach(fieldName => {
    if (formData.hasOwnProperty(fieldName)) {
      errors[fieldName] = validators[fieldName](formData[fieldName], formData);
    }
  });
  
  return errors;
};