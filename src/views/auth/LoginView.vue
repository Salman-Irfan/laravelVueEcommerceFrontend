<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half - Image -->
            <AuthImageComponent />
            <!-- Right Half - Form -->
            <v-col cols="6" class="mt-4">
                <v-container fluid style="background-color: black;" class="mt-8">
                    <!-- login form heading -->
                    <h1 class="text-center" style="color: yellow;">Login Form</h1>
                    <!-- center align the form inputs -->
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <!-- Form starts -->
                            <v-form @submit.prevent="login" ref="form" lazy-validation>
                                <!-- Email -->
                                <v-text-field variant="outlined" v-model="email" label="Email" :rules="emailRules" required
                                    style="color: yellow;"></v-text-field>
                                <!-- Password -->
                                <v-text-field variant="outlined" v-model="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                                    :append-icon-cb="() => showPassword = !showPassword" label="Password"
                                    :rules="passwordRules" required style="color: yellow;"></v-text-field>
                                <!-- Submit button -->
                                <v-btn type="submit" block class="mt-4" style="background-color: yellow; color: black;">
                                    Login
                                </v-btn>
                                <!-- Error message for invalid input -->
                                <v-alert v-if="loginError" type="error" class="mt-2">
                                    Login failed.
                                </v-alert>
                            </v-form>
                            <!-- Registration and Forgot Password Links -->
                            <v-row>
                                <v-col cols="12">
                                    <div class="text-center" style="color: yellow;">
                                        <!-- admin login -->
                                        <p>Login as <router-link to="/admin/login"> Admin User </router-link>
                                        </p>
                                        <!-- register -->
                                        <p>
                                            Don't have an account? <router-link to="/register">Register here</router-link>
                                        </p>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="text-center" style="color: yellow;">
                                        <!-- forgot password -->
                                        <router-link to="/request-password">Forgot Password</router-link>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from "axios";
import AuthImageComponent from "../../components/authPageImage/AuthImageComponent"

export default {
    name: "LoginView",
    components: {
        AuthImageComponent
    },
    data() {
        return {
            email: "",
            password: "",
            showPassword: false,
            emailRules: [
                (v) => !!v || "Email is required",
                (v) => /.+@.+\..+/.test(v) || "Valid email is required",
            ],
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            ],
            loginError: false, // Flag to show signup error message
        };
    },
    methods: {
        login() {
            // Create a request body object with email and password
            const requestBody = {
                email: this.email,
                password: this.password,
            };

            // Send a POST request to the server
            axios.post("http://127.0.0.1:8000/api/login", requestBody)
                .then((response) => {
                    // Handle the successful response here
                    if (response.data.success) {
                        // Store the token in localStorage or Vuex store as needed
                        const token = response.data.token;
                        console.log(token);
                        // You can also redirect to another page after successful login
                        // For example, if you're using Vue Router:
                        // this.$router.push("/dashboard");
                    } else {
                        // Handle the case where the login is unsuccessful
                        this.loginError = true;
                        // You can display an error message here
                    }
                })
                .catch((error) => {
                    // Handle any errors that occur during the request
                    console.error("Login error:", error);
                    this.loginError = true;
                    // You can display an error message here
                });
        },
    },

}
</script>