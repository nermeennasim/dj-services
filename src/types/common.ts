// src/types/index.ts - Main types export
export * from './common';

// src/types/common.ts - Common/utility types
export interface Country {
  code: string;
  name: string;
  dialCode: string;
  format: string;
  placeholder: string;
  digitCount?: number;
  flag?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ContactInfo {
  email: string;
  phone?: string;
  countryCode?: string;
  address?: Address;
  socialLinks?: SocialLinks;
}

export interface SocialLinks {
  website?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  spotify?: string;
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export type FileType = 'image' | 'audio' | 'video' | 'document';

export interface FileUpload {
  id: string;
  name: string;
  url: string;
  type: FileType;
  size: number;
  uploadedAt: string;
}

// src/types/api.ts - API related types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ApiError[];
  pagination?: Pagination;
}

export interface ApiError {
  field?: string;
  message: string;
  code?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number>;
}

// src/types/auth.ts - Authentication types
export type UserRole = 'CLIENT' | 'DJ' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  emailVerified: boolean;
  phone?: string;
  countryCode?: string;
  address?: Address;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  phone?: string;
  countryCode?: string;
}

// src/types/dj.ts - DJ related types
export type MusicGenre = 
  | 'Hip-Hop' 
  | 'R&B' 
  | 'Pop' 
  | 'Rock' 
  | 'Electronic' 
  | 'Latin' 
  | 'Reggaeton' 
  | 'Country' 
  | 'Jazz' 
  | 'Classical'
  | 'Reggae'
  | 'Alternative'
  | 'Indie'
  | 'Top 40'
  | 'Old School'
  | 'International';

export type DJEquipment = 
  | 'Professional DJ Controller'
  | 'Turntables'
  | 'Mixer'
  | 'Microphones'
  | 'Speakers'
  | 'Subwoofers'
  | 'Lighting System'
  | 'Fog Machine'
  | 'Karaoke System'
  | 'Wireless Mics'
  | 'Backdrop/Screen';

export type DJServiceType = 
  | 'Wedding DJ'
  | 'Corporate Events'
  | 'Birthday Parties'
  | 'Club Nights'
  | 'Private Parties'
  | 'Quinceañeras'
  | 'School Events'
  | 'Holiday Parties'
  | 'Graduation Parties'
  | 'Anniversary Celebrations';

export interface DJProfile {
  id: string;
  userId: string;
  stageName: string;
  bio: string;
  experience: number; // years
  hourlyRate: number;
  genres: MusicGenre[];
  equipment: DJEquipment[];
  services: DJServiceType[];
  portfolio: FileUpload[];
  coverPhoto?: FileUpload;
  availability: DJAvailability;
  serviceArea: string[];
  verified: boolean;
  rating: number;
  totalGigs: number;
  reviews: Review[];
  socialLinks: SocialLinks;
  createdAt: string;
  updatedAt: string;
}

export interface DJAvailability {
  weeklySchedule: {
    monday: TimeSlot[];
    tuesday: TimeSlot[];
    wednesday: TimeSlot[];
    thursday: TimeSlot[];
    friday: TimeSlot[];
    saturday: TimeSlot[];
    sunday: TimeSlot[];
  };
  blackoutDates: string[]; // ISO date strings
  minimumNotice: number; // days
  maxEventsPerDay: number;
}

export interface Review {
  id: string;
  clientId: string;
  clientName: string;
  djId: string;
  bookingId: string;
  rating: number; // 1-5
  title?: string;
  comment?: string;
  eventType: EventType;
  eventDate: string;
  isVerified: boolean;
  isVisible: boolean;
  createdAt: string;
}

// src/types/events.ts - Event related types
export type EventType = 
  | 'WEDDING'
  | 'BIRTHDAY'
  | 'CORPORATE'
  | 'ANNIVERSARY'
  | 'GRADUATION'
  | 'PRIVATE_PARTY'
  | 'QUINCEAÑERA'
  | 'HOLIDAY_PARTY'
  | 'CLUB_NIGHT'
  | 'FESTIVAL'
  | 'OTHER';

export type BookingStatus = 
  | 'PENDING'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'REFUNDED';

export interface Event {
  id: string;
  title: string;
  description?: string;
  type: EventType;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  address: Address;
  guestCount?: number;
  ageGroup?: 'Kids' | 'Teens' | 'Adults' | 'Mixed';
  musicPreferences?: MusicGenre[];
  specialRequests?: string;
  requirements?: string;
  budget?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  clientId: string;
  djId: string;
  eventId: string;
  status: BookingStatus;
  totalAmount: number;
  paidAmount: number;
  client: User;
  dj: DJProfile;
  event: Event;
  songRequests: SongRequest[];
  payments: Payment[];
  messages: BookingMessage[];
  confirmedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SongRequest {
  id: string;
  bookingId: string;
  songTitle: string;
  artist?: string;
  album?: string;
  requestedBy?: string;
  notes?: string;
  isPaid: boolean;
  isApproved?: boolean;
  price?: number;
  priority: 1 | 2 | 3; // 1=normal, 2=high, 3=urgent
  playedAt?: string;
  createdAt: string;
}

export interface BookingMessage {
  id: string;
  bookingId: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  message: string;
  attachments?: FileUpload[];
  isRead: boolean;
  createdAt: string;
}

// src/types/payments.ts - Payment related types
export type PaymentStatus = 
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELLED'
  | 'REFUNDED'
  | 'PARTIALLY_REFUNDED';

export type PaymentMethod = 
  | 'card'
  | 'bank_transfer'
  | 'cash'
  | 'check'
  | 'paypal'
  | 'venmo'
  | 'zelle';

export interface Payment {
  id: string;
  bookingId: string;
  stripePaymentId?: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  description?: string;
  paymentMethod?: PaymentMethod;
  processingFee?: number;
  djPayout?: number;
  invoiceUrl?: string;
  receiptUrl?: string;
  paymentDate?: string;
  payoutDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  hourlyRate?: number;
  features: string[];
  maxHours?: number;
  setupIncluded: boolean;
  equipmentIncluded: DJEquipment[];
  popular?: boolean;
}

// src/types/forms.ts - Form related types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  countryCode?: string;
  eventType?: EventType;
  eventDate?: string;
  message: string;
  budget?: string;
  guestCount?: number;
  venue?: string;
}

export interface BookingFormData {
  eventDetails: {
    title: string;
    type: EventType;
    date: string;
    startTime: string;
    endTime: string;
    guestCount: number;
  };
  venueDetails: {
    name: string;
    address: Address;
    hasSound: boolean;
    hasLighting: boolean;
    specialRequirements?: string;
  };
  musicPreferences: {
    genres: MusicGenre[];
    mustPlay: string[];
    doNotPlay: string[];
    specialRequests?: string;
  };
  additionalServices: {
    mcServices: boolean;
    lighting: boolean;
    karaoke: boolean;
    photoSlideshow: boolean;
  };
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'time';
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    custom?: (value: any) => string;
  };
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormState<T = any> {
  data: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// src/types/ui.ts - UI/Component related types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface Alert {
  id: string;
  type: AlertType;
  title?: string;
  message: string;
  dismissible?: boolean;
  duration?: number; // auto-dismiss after ms
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  children?: NavigationItem[];
}

export interface SearchFilters {
  location?: string;
  eventType?: EventType;
  date?: DateRange;
  priceRange?: {
    min: number;
    max: number;
  };
  genres?: MusicGenre[];
  rating?: number;
  verified?: boolean;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
  label: string;
}

// src/types/calendar.ts - Calendar related types
export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  type: 'booking' | 'available' | 'blocked';
  color?: string;
  description?: string;
  location?: string;
}

export interface AvailabilitySlot {
  date: string;
  timeSlots: TimeSlot[];
  isAvailable: boolean;
  price?: number;
}

// src/types/notifications.ts - Notification types
export type NotificationType = 
  | 'booking_request'
  | 'booking_confirmed'
  | 'payment_received'
  | 'message_received'
  | 'review_posted'
  | 'system_update';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: any;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

// src/types/analytics.ts - Analytics types
export interface DashboardStats {
  totalBookings: number;
  pendingBookings: number;
  totalRevenue: number;
  averageRating: number;
  upcomingEvents: number;
  completedEvents: number;
  repeatClients: number;
  responseRate: number;
}

export interface RevenueData {
  date: string;
  amount: number;
  bookings: number;
}

export interface PopularGenre {
  genre: MusicGenre;
  requestCount: number;
  percentage: number;
}