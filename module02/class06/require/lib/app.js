define(["models/user", "models/alumno"], function(User, Alumno) {
  var app = {
    models: {
      User: User,
      Alumno: Alumno
    }
  };
  return app;
});