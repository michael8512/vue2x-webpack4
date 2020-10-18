const UPDATE_ROUTER = "UPDATE_ROUTER";
export default function(store, router){
    store.registerModule("router",{
        state: {
            name: ''
        },
        mutations: {
            [UPDATE_ROUTER](state, {name}){
                state.name = name;
            }
        }
    });
    router.beforeEach(function(to,from,next){
        store.commit(UPDATE_ROUTER,{name: to.name});
        next();
    });
}
