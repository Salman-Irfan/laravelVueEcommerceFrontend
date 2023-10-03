<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half - Image -->
            <AuthImageComponent />
            <!-- Right Half - Form -->
            <v-col cols="6" class="mt-4">
                <v-container fluid style="background-color: orangered;" class="mt-8">
                    <!-- login form heading -->
                    <h1 class="text-center" style="color: black;">Admin Login Form</h1>
                    <!-- center align the form inputs -->
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <!-- Form starts -->
                            <v-form @submit.prevent="login" ref="form" lazy-validation>
                                <!-- Email -->
                                <v-text-field variant="outlined" v-model="email" label="Email" :rules="emailRules" required
                                    style="color: black;"></v-text-field>
                                <!-- Password -->
                                <v-text-field variant="outlined" v-model="password"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                                    :append-icon-cb="() => showPassword = !showPassword" label="Password"
                                    :rules="passwordRules" required style="color: black;"></v-text-field>
                                <!-- Submit button -->
                                <v-btn type="submit" block class="mt-4" style="background-color: orange; color: black;">
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
                                    <div class="text-center" style="color: black;">
                                        <!-- normal user login -->
                                        <p>Login as <router-link to="/login"> User </router-link>
                                        </p>
                                        <!-- register -->
                                        <p>
                                            Don't have an account? <router-link to="/register">Register here</router-link>
                                        </p>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="text-center" style="color: black;">
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
import AuthImageComponent from "../../components/authPageImage/AuthImageComponent"

export default {
    name: "AdminLoginView",
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

    },
}
</script>