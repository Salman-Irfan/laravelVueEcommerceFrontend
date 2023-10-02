<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-img src="../../assets/images/bookPicture.jpeg" class="ml-7 my-3" width="142px" height="45px"></v-img>
            <SideBar />
        </v-navigation-drawer>

        <v-app-bar>
            <!-- drawer -->
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- title -->
            <v-app-bar-title>Laravel Vue Ecommerce</v-app-bar-title>
            <v-spacer></v-spacer>
            <!-- Add an account icon without passing props -->
            <v-btn icon @click="toggleUserDropDownMenu">
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <!-- Display the menu items when showUserDropDownMenu is true -->
            <v-card v-if="showUserDropDownMenu">
                <v-card-item @click="navigateToUserProfile">
                    User Profile
                </v-card-item>
                <v-card-item @click="logout">
                    Logout
                </v-card-item>
            </v-card>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<!-- script setup -->
<script setup>
import SideBar from "./SideBarLayout.vue";

</script>

<script>
export default {
    name: 'AppLayout',
    data() {
        return {
            drawer: null,
            showUserDropDownMenu: false,
        };
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item.title;
            this.drawer = false; // Close the drawer when an item is selected (optional)
            console.log("clicked", item);
        },
        toggleUserDropDownMenu() {
            this.showUserDropDownMenu = !this.showUserDropDownMenu;
        },
        navigateToUserProfile() {
            // Implement navigation to the user profile page
            // You can use vue-router to navigate to the user profile route
        },
        logout() {
            // Implement your logout logic here
        },
    },
};
</script>


<style scoped>

.profileBtn{
    border: 1px solid #000;
}
.userMenu{
    border: 1px solid #000;
}
</style>
