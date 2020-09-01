module.exports = {
    Route(){
        const utilityRoute = require('./utility')

        const route = {
            Utility: {
                Ping: utilityRoute.PingRoute
            } 
        }

        return route
    },
    InitRoute(router){
        const route = this.Route()

        router.get('/ping', route.Utility.Ping)

        return router
    }
}