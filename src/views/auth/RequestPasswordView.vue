<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half - Image -->
            <AuthImageComponent />
            <!-- Right Half - Form -->
            <v-col cols="6" class="mt-4">
                <v-container fluid style="background-color: black;" class="mt-8">
                    <!-- Request new password form heading -->
                    <h1 class="text-center" style="color: yellow;">Request new Password</h1>
                    <!-- Center align the form inputs -->
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <!-- Form starts -->
                            <v-form @submit.prevent="requestNewPassword" ref="form" lazy-validation>
                                <!-- Email -->
                                <v-text-field variant="outlined" v-model="email" label="Enter Email" :rules="emailRules"
                                    required style="color: yellow;"></v-text-field>
                                <!-- Submit button -->
                                <v-btn type="submit" block style="background-color: yellow; color: black;">
                                    Submit
                                </v-btn>
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
import AuthImageComponent from "../../components/authPageImage/AuthImageComponent"

export default {
    name: "RequestPasswordView",
    components: {
        AuthImageComponent
    },
    data() {
        return {
            email: "",
            emailRules: [
                (v) => !!v || "Email is required",
                (v) => /.+@.+\..+/.test(v) || "Valid email is required",
            ],
        };
    },
    methods: {

    },
}
</script>