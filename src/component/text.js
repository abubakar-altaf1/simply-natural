import React, { Component } from "react";

export default class Text extends Component {
    render() {
        return (
            <section className="pb-32 px-10 flex gap-28">
                <div className="flex flex-col gap-10 w-[20vw]">
                    <h3 className="font-medium">Need help in choosing the right plants?</h3>
                    <p className="text-[red]">ASK FOR HELP</p>
                </div>
                <div className="flex flex-col gap-10 w-[50vw]">
                    <p className="font-light">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</p>
                    <p className="font-light">Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</p>
                </div>
            </section>
        )
    }
}