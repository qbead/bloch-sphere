export default `
<style>
.label,
.axis-label,
.angle-label {
  line-height: 1;
  display: inline-block;
  color: var(--label-color, white);
  text-align: center;
  font-size: 1em;
  font-family: monospace;
  text-shadow: 0 0 2px black;
}
.axis-label {
  font-size: 1.6em;
}
.axis-label::before {
  content: '';
  border: solid var(--label-color, white);
  border-width: 0 0 0 3px;
  display: inline-block;
  padding: 0.4em;
  transform: scale(0.6, 1.55) translate(0.6em, 0.036em);
}
.axis-label::after {
  content: '';
  border: solid var(--label-color, white);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.4em;
  transform: scaleX(0.6) translate(-0.4em, 0.1em) rotate(-45deg);
}
</style>
`
