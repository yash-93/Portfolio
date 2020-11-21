const Project = require("./model");
const HttpError = require("./http-error");

const createProject = async (req, res, next) => {
  const { title, description, demo, code, image } = req.body;

  const createdProject = new Project({
    title,
    description,
    demo,
    code,
    image,
  });

  try {
    await createdProject.save();
  } catch {
    const error = new HttpError("Creating project failed, try again.", 500);
    return next(error);
  }
  res.status(201).json({ project: createdProject });
};

exports.createProject = createProject;
