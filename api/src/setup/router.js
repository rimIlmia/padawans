import express from "express";
import padawanRoutes from "../modules/padawans/routes";
import skillRoutes from "../modules/skills/routes";
import levelRoutes from "../modules/levels/routes";

const Router = app => {
  let apiRoutes = express.Router();

  // Home route. We'll end up changing this to our main front end index later.
  app.get("/", function(req, res) {
    res.send("This Route is not yet defined.");
  });

  //Project router
  app.use("/api/", apiRoutes);
  app.use("/api/padawans", padawanRoutes);
  app.use("/api/skills", skillRoutes);
  app.use("/api/levels", levelRoutes);

  // app.use("/api/projects", projectRoutes);
  // app.use("/api/pages", pageRoutes);
  // app.use("/api/users", userRoutes);
};
export default Router;
