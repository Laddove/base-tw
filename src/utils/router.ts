/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Laddove. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Route, Router, RouterLocation } from '@vaadin/router'
import EventEmitter from 'eventemitter3'

interface IPXRouter {
  
    get baseEvent():EventEmitter<"navigate" ,RouterLocation>;

    /**
     * Intialize The WebRouter With its container Element and Corresponding routes
     * @param webContainer
     * @param routes
     */
    intializeWebRouter(webContainer: HTMLElement, routes: Route[]): void
}

class PxRouter implements IPXRouter {
    private webContainer: HTMLElement | undefined = undefined
    private routes: Route[] | undefined = undefined
    private vaadinRouterInstance: Router | undefined = undefined
    private eventEmitter: EventEmitter<'navigate', RouterLocation> | undefined = new EventEmitter()

    private async getCurrentLocation() {
        return new Promise<RouterLocation>((c) => {
            if (this.vaadinRouterInstance?.location) {
                c(this.vaadinRouterInstance.location)
            } else {
                setTimeout(() => {
                    c(this.vaadinRouterInstance!.location)
                }, 200)
            }
        })
    }

    get baseEvent(){
        return this.eventEmitter!;
    }


    intializeWebRouter(webContainer: HTMLElement, routes: Route[]): void {
        this.webContainer = webContainer
        this.routes = routes

        if (this.webContainer) {
            this.vaadinRouterInstance = new Router(this.webContainer)
            this.vaadinRouterInstance.setRoutes(this.routes)

            window.addEventListener('load', () => {
                if (this.vaadinRouterInstance) {
                    this.getCurrentLocation().then((currentLocation) => {
                        this.eventEmitter?.emit('navigate', currentLocation.pathname)
                    })
                }
            })
    
            window.addEventListener('vaadin-router-location-changed', (ev) => {
                this.eventEmitter?.emit('navigate', ev.detail.location.pathname)
                window.scrollTo({ top: 0 })
            })
        }
    }
}
const k =  new PxRouter()
export const PXRouterFactory = () => k;