import Matter from "matter-js";
import React, {useState, useEffect, useRef} from 'react';
import html from '../../static/html5.svg'
import java from '../../static/java.svg'
import js from '../../static/js.svg'
import sass from '../../static/sass.svg'
import css from '../../static/css.svg'
import spring from '../../static/spring.svg'

const AirBalls = () => {

    const scene = useRef(null);

    useEffect(() => {
            var Engine = Matter.Engine,
                Render = Matter.Render,
                World = Matter.World,
                Bodies = Matter.Bodies,
                Mouse = Matter.Mouse,
                MouseConstraint = Matter.MouseConstraint;

            var engine = Engine.create({
                // positionIterations: 20
            });

            console.log(scene)
            var render = Render.create({
                element: scene.current,
                engine: engine,
                options: {
                    width: 400,
                    height: 500,
                    wireframes: false,
                    background: 'transparent'
                }
            });

            const bodies = [html, js, css, sass, java, spring].map((tech, idx) => {
                console.log(tech)
                return Bodies.circle(200, 200 + (idx * 30), 40, { render: {
                sprite: {
                    texture: tech,
                    xScale: 0.2,
                    yScale: 0.2
                }
            }, restitution: 0.7 })})
            World.add(engine.world, [
                // walls
                Bodies.rectangle(200, 500, 400, 20, { isStatic: true, render: { fillStyle: 'black'} }),
                Bodies.rectangle(0, 250, 50, 500, { isStatic: true, render: { fillStyle: 'transparent'} }),
                Bodies.rectangle(400, 250, 20, 500, { isStatic: true, render: { fillStyle: 'transparent'} }),
                Bodies.rectangle(200, 0, 400, 20, { isStatic: true, render: { fillStyle: 'transparent'} })
            ]);

            World.add(engine.world, bodies);

            // add mouse control
            var mouse = Mouse.create(render.canvas),
                mouseConstraint = MouseConstraint.create(engine, {
                    mouse: mouse,
                    constraint: {
                        stiffness: 0.2,
                        render: {
                            visible: false
                        }
                    }
                });

            World.add(engine.world, mouseConstraint);

            // Matter.Events.on(mouseConstraint, "mousedown", function (event) {
            //     World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
            // });

            Engine.run(engine);

            Render.run(render);
        
    }, []);

    return (
        <div ref={scene} />
    );
}

export default AirBalls;