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
		this.apiUrl =
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
	}

	async submitContactForm(data: ContactFormData): Promise<EmailResponse> {
		try {
			const response = await fetch(`${this.apiUrl}/emails/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
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
				return {
					success: false,
					message: error.message,
				};
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
			const response = await fetch(`${this.apiUrl}/emails/health`);
			return response.ok;
		} catch (error) {
			console.error("Backend connection test failed:", error);
			return false;
		}
	}
}

// Export singleton instance
export const emailMutation = new EmailMutation();
