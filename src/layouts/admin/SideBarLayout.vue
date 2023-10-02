<template>
    <v-card flat>
        <v-list flat dense>
            <v-list-item-group>
                <v-list-item class="pl-3" v-for="item in AdminSideBarItems" :key="item.title" v-bind="item.attrs" link>
                    <v-list-item-content>
                        <v-list-item-title class="text-transform-none letter-space font-12 fw-500">
                            <v-icon class="mr-3">{{ item.icon }}</v-icon>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
import {AdminSideBarItems} from '../../constants/adminSideBarItems'
export default {
    name: 'SideBarLayout',
    data() {
        return {
            AdminSideBarItems: AdminSideBarItems.items,
        };
    },
}
</script>