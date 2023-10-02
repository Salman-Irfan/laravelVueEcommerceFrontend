export const AdminSideBarItems = {
    items: [
        {
            title: "Dashboard",
            icon: "mdi-home",
            attrs: {
                to: "/app/dashboard",
                "active-class": "primary--text list-item-active",
            },
        },
        {
            title: "Products",
            icon: "mdi-shopping", // suggest some thing related to products
            attrs: {
                to: "/app/products",
                "active-class": "primary--text list-item-active",
            },
        },
        {
            title: "Users",
            icon: "mdi-account-multiple",
            attrs: {
                to: "/app/users",
                "active-class": "primary--text list-item-active",
            },
        },
        {
            title: "Reports",
            icon: "mdi-chart-bar",
            attrs: {
                to: "/app/reports",
                "active-class": "primary--text list-item-active",
            },
        },
    ],
};
