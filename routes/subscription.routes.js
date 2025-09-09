import {Router} from "express"
import authorize from "../Middlewares/auth.middleware.js"
import { cancelUserSubscription, createSubscription, deleteSubscription, getSubscription, getSubscriptions, getUpcomingRenewals, getUserSubscriptions, updateSubscription } from "../controllers/subscription.controller.js"

const subscriptionRouter = Router()

subscriptionRouter.get("/", getSubscriptions)

subscriptionRouter.get("/:id", getSubscription)

subscriptionRouter.post("/", authorize, createSubscription)

subscriptionRouter.put("/", authorize, updateSubscription)

subscriptionRouter.delete("/", authorize, deleteSubscription)

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions)


subscriptionRouter.put("/:id/cancel", authorize, cancelUserSubscription)

subscriptionRouter.get("/upcoming-renewals", authorize, getUpcomingRenewals)


export default subscriptionRouter;