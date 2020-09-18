const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("name", { type: String, required: true });

        this.log(this.options.name);
    }

    createComponent() {
        this.fs.copyTpl(
            this.templatePath("./TemplateStore.ts"),
            this.destinationPath(
                `./src/stores/${this.options.name}.ts`,
            ),
            {
                name: this.options.name,
            },
        );

    };
}
