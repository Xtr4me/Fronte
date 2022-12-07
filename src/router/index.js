import { createWebHistory, createRouter } from "vue-router"

const routes = [
    { path : '/', name: "home", 
        component : () => import("@/views/Home.vue") 
    },
    { path : '/employer', name: "employer",
      component : () => import("@/views/employer/Index.vue") 
    },
    { path : '/employer/cadastrar', name : "employer-create", 
      component : () => import("@/views/employer/Create.vue") 
    },
    {
      path: '/employer/edit/:id', name: "employer-edit",
      component: () => import("@/views/employer/Edit.vue")
    },

    { path : '/movel', name: "movel",
      component : () => import("@/views/movel/Index.vue") 
    },
    { path : '/movel/cadastrar', name : "movel-create", 
      component : () => import("@/views/movel/Create.vue") 
    },
    {
      path: '/movel/edit/:id', name: "movel-edit",
      component: () => import("@/views/movel/Edit.vue")
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;