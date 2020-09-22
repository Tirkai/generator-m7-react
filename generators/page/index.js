const Generator = require("yeoman-generator");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("name", { type: String, required: true });
        this.log(this.options.name);
    }

    createComponent() {

        this.fs.copyTpl(
            this.templatePath("./TemplatePage.tsx"),
            this.destinationPath(
                `./src/pages/${this.options.name}.tsx`,
            ),
            {
                name: this.options.name,
                inject: this.options.inject
            },
        );

    }
};
