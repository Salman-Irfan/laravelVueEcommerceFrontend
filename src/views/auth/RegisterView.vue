<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half - Image -->
            <AuthImageComponent />

            <!-- Right Half - Form -->
            <v-col cols="6" class="mt-4">
                <v-container fluid style="background-color: black;" class="mt-8">
                    <h1 class="text-center" style="color: yellow;">Sign Up Form</h1>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <!-- Form starts -->
                            <v-form @submit.prevent="signup" ref="form" lazy-validation>
                                <!-- Name -->
                                <v-text-field variant="outlined" v-model="name" label="Name" :rules="nameRules" required
                                    style="color: yellow;"></v-text-field>
                                <!-- Email -->
                                <v-text-field variant="outlined" v-model="email" label="Email" :rules="emailRules" required
                                    style="color: yellow;"></v-text-field>
                                <!-- Password -->
                                <v-text-field variant="outlined" v-model="password" label="Password" :rules="passwordRules"
                                    required :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                                    style="color: yellow;"></v-text-field>
                                <!-- Confirm Password -->
                                <v-text-field variant="outlined" v-model="confirmPassword" label="Confirm Password"
                                    :rules="confirmPasswordRules" required
                                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showConfirmPassword ? 'text' : 'password'"
                                    @click:append="showConfirmPassword = !showConfirmPassword"
                                    style="color: yellow;"></v-text-field>
                                <!-- Submit button -->
                                <v-btn type="submit" block class="mt-4" style="background-color: yellow; color: black;">Sign
                                    Up</v-btn>
                            </v-form>
                            <!-- Registration and Forgot Password Links -->
                            <v-row>
                                <v-col cols="12">
                                    <div class="text-center" style="color: yellow;">
                                        <!-- already have an account -->
                                        <p>Already have an Account</p>
                                        <!-- normal user login -->
                                        <router-link to="/login"> 
                                            <v-btn>Login</v-btn>
                                        </router-link>
                                    </div>
                                </v-col>
                                
                            </v-row>
                            <!-- Error message for invalid input -->
                            <v-alert v-if="signupError" type="error" class="mt-2">Sign up failed.</v-alert>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthImageComponent from "../../components/authPageImage/AuthImageComponent";

export default {
    name: "RegisterView",
    components: {
        AuthImageComponent,
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            nameRules: [(v) => !!v || "Name is required"],
            emailRules: [
                (v) => !!v || "Email is required",
                (v) => /.+@.+\..+/.test(v) || "Valid email is required",
            ],
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            ],
            confirmPasswordRules: [
                (v) => !!v || "Confirm Password is required",
                (v) => v === this.password || "Passwords do not match",
            ],
            signupError: false, // Flag to show signup error message
        };
    },
    methods: {

    },
};
</script>
