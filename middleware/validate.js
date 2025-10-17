// const { ZodError } = require("zod");
// const { z } = require("zod");
// const validate = (schema) => (req, res, next) => {
//   try {

//     req.body = schema.parse(req.body);
//     console.log("Validation successful:", req.body);
//     next();
//   } catch (err) {
//     // console.error(err);
//      if (err instanceof z.ZodError) {
//         // console.log(err)
//      const message = err.message || "Validation error";
//       return res.status(400).json({
//         success: false,
//         message: message,
//       });

     
//     }
//     // Other errors (unexpected ones)
//     return res.status(500).json({
//       success: false,
//       error: err.message || "Something went wrong",
//     });
//   }
// };

// module.exports = validate;

const { ZodError } = require("zod");

const validate = (schema) => (req, res, next) => {
  try {
    // console.log("Validating request body:", req.body);
    req.body = schema.parse(req.body); // parse + validate
    next();
  } catch (err) {
     if (err instanceof ZodError && Array.isArray(err.errors)) {
      const formattedErrors = err.errors.map(e => ({
        field: e.path[0] || 'unknown',
        message: e.message || 'Invalid value'
      }));

      return res.status(400).json({
        success: false,
        errors: formattedErrors
      });
    }

    console.error(err.message);
    // Other errors (unexpected ones)
    return res.status(500).json({
      success: false,
      error: err || "Something went wrong",
    });
  }
};

module.exports = validate;
