import { BASE_URL } from "../baseURL/baseURL";
import mocks from "../mocks/mocks";

// Define the type for API request parameters
interface ApiRequestParams {
  endpoint: string;
  method: string;
  authToken?: string;
  data?: any;
}

const createHeaders = (authToken?: string): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }
  return headers;
};

const isServiceAvailable = false; // Set this to false to use mock data

const apiRequest = async ({
  endpoint,
  method,
  authToken,
  data,
}: ApiRequestParams) => {
    console.log(`Using mock data for endpoint: ${endpoint}`);
  if (!isServiceAvailable) {
    // Use mock data if the service is not available
    if (endpoint in mocks) {
      // Check if endpoint exists in mocks
      console.log(`Using mock data for endpoint: ${endpoint}`);
      console.log(mocks[endpoint], "Mock data:");
      return mocks[endpoint];
    } else {
      throw new Error(`No mock data available for endpoint: ${endpoint}`);
    }
  }

  const options: RequestInit = {
    method,
    headers: createHeaders(authToken),
    credentials: "include",
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData, "API response data:");
    return responseData;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

// Example API functions
export const postSignupForm = (data: any) =>
  apiRequest({ endpoint: "v1/auth/signup", method: "POST", data });
export const doSignOut = () =>
  apiRequest({ endpoint: "v1/auth/signout", method: "GET" });
export const postSignInForm = (data: any) =>
  apiRequest({ endpoint: "v1/auth/signin", method: "POST", data });
export const userOwnSocietyInformation = (data: any) =>
  apiRequest({ endpoint: "v1/society/information", method: "POST", data });


// (async () => {
//     const data = await userOwnSocietyInformation({});
//     console.log(data, "User Own Society Information:");
//   })();