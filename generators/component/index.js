const Generator = require("yeoman-generator");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("name", { type: String, required: true });
        this.option("inject");
        this.log(this.options.name);
    }

    createComponent() {
        mkdirp.sync(`./components/${this.options.name}`);

        let fileName;
        let folder = "";
        if(this.options.name.indexOf("/") > -1){
            [ fileName ] = this.options.name.split("/").slice(-1);
        } else fileName = this.options.name;

        this.fs.copyTpl(
            this.templatePath("./TemplateComponent.tsx"),
            this.destinationPath(
                `./src/components/${this.options.name}/${fileName}.tsx`,
            ),
            {
                name: fileName,
                inject: this.options.inject
            },
        );


        this.fs.copyTpl(
            this.templatePath("./style.module.css"),
            this.destinationPath(
                `./src/components/${this.options.name}/style.module.css`,
            ),
            {
                name: fileName,
            },
        );
    }
};
