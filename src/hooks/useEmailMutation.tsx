import { useState } from "react";

export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface ApiResponse {
	success?: boolean;
	message?: string;
	error?: string;
	id?: string;
}

export const useEmailMutation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<ApiResponse | null>(null);

	const sendEmail = async (formData: ContactFormData): Promise<ApiResponse> => {
		setIsLoading(true);
		setIsError(false);
		setError(null);
		setData(null);

		try {
			console.log("📧 Sending email via API:", "/api/contact");

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result: ApiResponse = await response.json();

			console.log("📬 API Response:", result);

			if (!response.ok || !result.success) {
				throw new Error(
					result.error || `HTTP ${response.status}: Failed to send email`
				);
			}

			setData(result);
			return result;
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Network error occurred";
			console.error("❌ Email API Error:", errorMessage);

			setIsError(true);
			setError(errorMessage);
			throw err;
		} finally {
			setIsLoading(false);
		}
	};

	const reset = () => {
		setIsError(false);
		setError(null);
		setData(null);
		setIsLoading(false);
	};

	return {
		sendEmail, // ✅ This is what your Contact form will use
		isLoading,
		isError,
		error,
		data,
		reset,
	};
};
