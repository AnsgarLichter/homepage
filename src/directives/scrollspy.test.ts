import { test, expect, describe, afterEach, beforeEach, vi } from "vitest";

import { nextTick } from "vue";

import { enableAutoUnmount, mount, shallowMount } from "@vue/test-utils";

import { spyDirective, type ScrollSpyOptions } from "./scrollspy";
import { root } from "postcss";
import { wrap } from "module";

const Component = {
    props: {
        options: {
            type: Object,
            required: false
        }
    },
    template:
        `<template>
            <div>
                <div v-if="options" v-scroll-spy="options" class="navbar">
                    <div class="navbar-item">
                        <a href="#item1">Item 1</a>
                    </div>
                    <div class="navbar-item">
                        <a href="#item2">Item 2</a>
                    </div>
                </div>
                <div v-else v-scroll-spy="" class="navbar">
                    <div class="navbar-item">
                        <a href="#item1">Item 1</a>
                    </div>
                    <div class="navbar-item">
                        <a href="#item2">Item 2</a>
                    </div>
                </div>
                <div class="content scroll-container">
                    <div id="item1" >Content Item 1></div>
                    <div id="item2" >Content Item 2></div>
                </div>
            </div>
        </template>`
};

let mountElement: HTMLDivElement
beforeEach(() => {
    mountElement = document.createElement('div');
    document.body.appendChild(mountElement);
});

enableAutoUnmount(afterEach);
afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
});

describe('scrollspy directve - valid usages', () => {
    test("Mount without options", async () => {
        expect(spyDirective).toBeTruthy();

        const wrapper = mount(
            Component,
            {
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(wrapper).toBeDefined();
    });

    test("Mount with options", async () => {
        expect(spyDirective).toBeTruthy();
        const ScrollSpyOptions: ScrollSpyOptions = {
            navigationItemSelector: ".navbar > div > a",
            scrollContainerSelector: ".scroll-container",
            activeClass: "activeClass",
            defaultActive: false,
            clickNavigationItemToScrollIntoSection: false,
            scrollOnStart: false,
            scrollBehavior: "auto"
        };

        const wrapper = mount(
            Component,
            {
                props: {
                    options: ScrollSpyOptions
                },
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(wrapper).toBeDefined();

    });

    test("Mount scroll spy directive with defaultActive true and custom active Class", async () => {
        expect(spyDirective).toBeTruthy();
        const ScrollSpyOptions: ScrollSpyOptions = {
            navigationItemSelector: ".navbar > div > a",
            scrollContainerSelector: ".scroll-container",
            activeClass: "activeClass",
            defaultActive: true
        };

        const wrapper = mount(
            Component,
            {
                props: {
                    options: ScrollSpyOptions
                },
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(wrapper).toBeDefined();

        await nextTick();

        expect(wrapper.find("." + ScrollSpyOptions.activeClass).exists()).toBeTruthy();
        expect(wrapper.findAll("." + ScrollSpyOptions.activeClass).length).toBe(1);
        expect(wrapper.find("[href='#item1']").classes("" + ScrollSpyOptions.activeClass)).toBeTruthy();
        expect(wrapper.find("[href='#item2']").classes("" + ScrollSpyOptions.activeClass)).toBeFalsy();

    });

    test("Mount scroll spy directive with defaultActive false", async () => {
        expect(spyDirective).toBeTruthy();

        //TODO: How to mock scroll event and also positions?
        Element.prototype.scrollIntoView = () => {
            mountElement.dispatchEvent(new Event('scroll'));
        }
        
        const ScrollSpyOptions: ScrollSpyOptions = {
            navigationItemSelector: ".navbar > div > a",
            scrollContainerSelector: ".scroll-container",
            activeClass: "activeClass",
            defaultActive: false
        };

        const wrapper = mount(
            Component,
            {
                props: {
                    options: ScrollSpyOptions
                },
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(wrapper).toBeDefined();

        await nextTick();

        expect(wrapper.find("." + ScrollSpyOptions.activeClass).exists()).toBeFalsy();
        expect(wrapper.findAll("." + ScrollSpyOptions.activeClass).length).toBe(0);
        expect(wrapper.find("[href='#item1']").classes("" + ScrollSpyOptions.activeClass)).toBeFalsy();
        expect(wrapper.find("[href='#item2']").classes("" + ScrollSpyOptions.activeClass)).toBeFalsy();
        
        //TODO: Click listener isn't called
        await wrapper.trigger("click");
    });

    

    //TODO: scroll on start with stub of scrollIntoView

    //TODO: click listener applied yes / no
});

describe("scrollspy directive - required components can't be found", () => {
    test("Error is thrown if navigation items can't be found", async () => {
        const spyConsoleWarn = vi.spyOn(console, "warn");
        
        expect(spyDirective).toBeTruthy();

        const ScrollSpyOptions: ScrollSpyOptions = {
            navigationItemSelector: "invalid selector"
        };

        mount(
            Component,
            {
                props: {
                    options: ScrollSpyOptions
                },
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(spyConsoleWarn).toHaveBeenCalledOnce();
        expect(spyConsoleWarn).toHaveBeenCalledWith("The scroll container and navigation items have to be defined!");
    });

    test("Error is thrown if navigation sections can't be found for items", async () => {
        expect(spyDirective).toBeTruthy();
        const ScrollSpyOptions: ScrollSpyOptions = {
            navigationItemSelector: ".navbar > div > a",
            scrollContainerSelector: ".scroll-container",

        };

        Component.template =
            `<template>
                <div>
                    <div v-if="options" v-scroll-spy="options" class="navbar">
                        <div class="navbar-item">
                            <a href="#item1">Item 1</a>
                        </div>
                        <div class="navbar-item">
                            <a href="#item2">Item 2</a>
                        </div>
                    </div>
                    <div v-else v-scroll-spy="" class="navbar">
                        <div class="navbar-item">
                            <a href="#item1">Item 1</a>
                        </div>
                        <div class="navbar-item">
                            <a href="#item2">Item 2</a>
                        </div>
                    </div>
                    <div class="content scroll-container">
                        <div id="item3" >Content Item 1></div>
                        <div id="item4" >Content Item 2></div>
                    </div>
                </div>
            </template>`;

        const spyConsoleWarn = vi.spyOn(console, "warn");

        shallowMount(
            Component,
            {
                props: {
                    options: ScrollSpyOptions
                },
                global: {
                    directives: {
                        "scroll-spy": spyDirective
                    }
                },
                attachTo: mountElement,
            }
        );

        expect(spyConsoleWarn).toHaveBeenCalledOnce();
        expect(spyConsoleWarn).toHaveBeenCalledWith("There were no corresponding sections found for the navigation items!");
    });
});
