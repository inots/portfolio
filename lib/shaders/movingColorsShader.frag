
#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform float u_time;
uniform vec3 u_bg;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

varying vec2 vUv;

vec3 colorA = vec3(0.1255, 0.4196, 0.0588);
// vec3 colorB = vec3(1.000,0.777,0.052);

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1., 1., 1.);
    vec3 d = vec3(0.158, 0.338, -1.472);

    return a + b*cos(TWO_PI*(c*t+d));
}

void main(){
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    float pct = 0.0;
    st = st *2.;

    // pct = smoothstep(0.8,0.1,distance(st,vec2(u_mouse/u_resolution*2.-1.)));
    // radial: 
    pct = distance(st,vec2((sin(u_time)), cos(u_time))/1.8);

    // pct = distance(st,vec2((u_mouse/u_resolution)*2.-1.));
    // pct = fract(pct * 5.5) - 0.5;

    pct *= exp(-length(st));

    // vec3 color = vec3(pct);

    pct = sin(pct*8. + u_time)/8.; 
    pct = abs(pct);

    // pct = pow(0.01 / pct, 1.2);

    // float vol =  texture(u_ch, vec2(2.0, 0.0)).x;

    vec3 color = palette(pct);
    // color.b = 1.;
    // color.r = 1.;

	gl_FragColor = vec4( color, 1.0 );
}
