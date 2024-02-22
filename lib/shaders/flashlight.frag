
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution;
    float pct = 0.0;
    // st = st *2.;

    pct = smoothstep(0.3,0.2,distance(st,vec2(u_mouse/u_resolution)));

    vec3 color = vec3(pct);

	gl_FragColor = vec4( color, 1.0 );
}