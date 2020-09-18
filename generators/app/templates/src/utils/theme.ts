import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#096DD9",
        },
        secondary: {
            main: "#ffffff",
        },
    },

    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
            },
        },
        MuiFormControl: {
            root: {
                width: "100%",
            },
        },
        MuiFilledInput: {
            input: {
                background: "#EEEEEE",
            },
        },
        MuiInput: {
            input: {
                height: "32px",
                background: "#EEEEEE",
                borderRadius: "4px",
                padding: "4px 12px",
                borderBottom: "1px solid #c4c4c4",
            },
            underline: {
                "&:before": {
                    borderBottom: "1px solid #c4c4c4",
                    display: "none",
                },
                "&:hover:not($disabled):before": {
                    borderBottom: "1px solid #a2a2a2",
                },
            },
        },

        MuiInputLabel: {
            formControl: {
                transform: `translate(0, 22px) scale(1)`,
            },
            shrink: {
                transform: "translate(-5px, -5px) scale(0.75)",
            },
        },
        MuiFormLabel: {
            root: {
                padding: "8px",
                zIndex: 1,
                pointerEvents: "none",
            },
        },
        MuiStepper: {
            root: {
                padding: "0",
            },
        },
        MuiStepLabel: {
            completed: {
                cursor: "pointer",
            },
            labelContainer: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "10px",
            },
        },
        MuiFab: {
            root: {
                boxShadow: "none",
                "&:active": {
                    boxShadow: "none",
                },
                "&$focusVisible": {
                    boxShadow: "none",
                },
            },
            extended: {
                boxShadow: "none",
            },
        },
        MuiDialogTitle: {
            root: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e0e0e0",
                padding: "8px 24px",
            },
        },
    },
    props: {
        MuiButton: {
            disableElevation: true,
        },
        MuiTextField: {
            InputLabelProps: {
                // shrink: true,
            },
        },
    },
});

export { theme };
