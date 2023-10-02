<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half - Image -->
            <AuthImageComponent />

            <!-- Right Half - Form -->
            <v-col cols="6" class="mt-4">
                <v-container fluid style="background-color: black;" class="mt-8">
                    <h1 class="text-center" style="color: yellow;">Reset Password Form</h1>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <!-- Form starts -->
                            <v-form @submit.prevent="resetPassword" ref="form" lazy-validation>
                                <!-- Password -->
                                <v-text-field variant="outlined" v-model="password" label="New Password"
                                    :rules="passwordRules" required :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                                    style="color: yellow;"></v-text-field>
                                <!-- Confirm Password -->
                                <v-text-field variant="outlined" v-model="confirmPassword" label="Repeat Password"
                                    :rules="confirmPasswordRules" required
                                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showConfirmPassword ? 'text' : 'password'"
                                    @click:append="showConfirmPassword = !showConfirmPassword"
                                    style="color: yellow;"></v-text-field>
                                <!-- Submit button -->
                                <v-btn type="submit" block class="mt-4"
                                    style="background-color: yellow; color: black;">Reset</v-btn>
                            </v-form>
                            <!-- Back to Login link -->
                            <div class="text-center mt-4">
                                <router-link to="/login" style="color: yellow;">Back to Login</router-link>
                            </div>
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
    name: "ResetPasswordView",
    components: {
        AuthImageComponent,
    },
    data() {
        return {
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            ],
            confirmPasswordRules: [
                (v) => !!v || "Confirm Password is required",
                (v) => v === this.password || "Passwords do not match",
            ],
        };
    },
    methods: {

    },
};
</script>
