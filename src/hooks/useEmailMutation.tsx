// src/lib/emailMutation.ts
export interface ContactFormData {
	name: string;
	email: string;
	phone?: string;
	eventType?: string;
	eventDate?: string;
	message: string;
}

export interface EmailResponse {
	success: boolean;
	message: string;
}

export class EmailMutation {
	private apiUrl: string;

	constructor() {
		// Make sure to set NEXT_PUBLIC_API_URL in frontend .env
		this.apiUrl =
			process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

		console.log("Using API URL:", this.apiUrl); // Debug log
	}

	async submitContactForm(data: ContactFormData): Promise<EmailResponse> {
		try {
			// 🔑 FIXED: remove "emails/"

			console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
			console.log("Submitting to:", `${this.apiUrl}/contact`);
			const response = await fetch(`${this.apiUrl}/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.message || "Failed to send message");
			}

			return {
				success: true,
				message: result.message || "Message sent successfully!",
			};
		} catch (error) {
			console.error("Email submission error:", error);

			if (error instanceof Error) {
				return { success: false, message: error.message };
			}

			return {
				success: false,
				message: "Network error. Please check your connection and try again.",
			};
		}
	}

	// Test backend connection
	async testConnection(): Promise<boolean> {
		try {
			// 🔑 FIXED: remove "emails/"
			const response = await fetch(`${this.apiUrl}/health`);
			return response.ok;
		} catch (error) {
			console.error("Backend connection test failed:", error);
			return false;
		}
	}
}

// Export singleton instance
export const emailMutation = new EmailMutation();
