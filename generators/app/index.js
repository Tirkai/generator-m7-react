const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.appname = "m7-scaffolded-app";
    this.answers = await this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "input",
        name: "applicationTitle",
        message: "Application title",
        default: "M7-Application",
      },
    ]);

    this.fs.copy(
      this.templatePath("./src/**/*"),
      this.destinationPath("./src/"),
    );

    const templatePaths = [
      {
        source: "./*",
        dest: "./",
      },
      {
        source: "./.*",
        dest: "./",
      },
      {
        source: "./public/**/*",
        dest: "./public/",
      },
      {
        source: "./scripts/**/*",
        dest: "./scripts/",
      },
    ];

    templatePaths.forEach((item) =>
      this.fs.copyTpl(
        this.templatePath(item.source),
        this.destinationPath(item.dest),
        {
          applicationTitle: this.answers.applicationTitle,
          projectName: this.answers.projectName,
        }
      )
    );
  }
};
