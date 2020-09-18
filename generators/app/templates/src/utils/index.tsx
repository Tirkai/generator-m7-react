import { IBrowserRoute } from "interfaces/common/IBrowserRoute";
import { strings } from "locale";
import { intersectionWith } from "lodash";
import React from "react";
import { Route } from "react-router";
export const mapRoutes = (routes: IBrowserRoute[]) =>
    routes.map((route: IBrowserRoute) => {
        const component = route.component as React.ComponentClass;
        return (
            <Route
                key={route.path}
                path={route.path}
                component={component}
                exact={route.exact}
            />
        );
    });

export const checkInvalidReason = (reasons: string[], value: string) =>
    reasons.some((item) => item === value);

export const selectGlobalInvalidReasons = (reasons: string[]) => {
    const localeStrings = strings.errors.scanner;
    const definedReasons: { key: string; text: string }[] = [
        {
            key: "UV_Luminescence",
            text: localeStrings.UVLuminescence,
        },
        {
            key: "IR_B900",
            text: localeStrings.IRB900,
        },
        {
            key: "Image_Pattern",
            text: localeStrings.imagePattern,
        },
        {
            key: "Axial_Protection",
            text: localeStrings.axialProtection,
        },
        {
            key: "UV_Fibers",
            text: localeStrings.UVFibers,
        },
        {
            key: "IR_Visibility",
            text: localeStrings.IRVisibility,
        },
        {
            key: "OCRSecurityText",
            text: localeStrings.OCRSecurityText,
        },
        {
            key: "IPI",
            text: localeStrings.IPI,
        },
    ];
    return intersectionWith(definedReasons, reasons, (a, b) => a.key === b);
};
