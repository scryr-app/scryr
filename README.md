# 🔮 Scryr

Actionable Architecture.

## Codename

There are 3 different layers to a scryr diagram

1. _Blueprint_ - The Scryr cue file This gets checked in and is plain text
   1. Can be embedded in markdown
   2. Can create a markdown readme
   3. useful for MCP
2. _Facade_ This enhances the blue print with additional display things, like
   technology framework icons. The default facade is for SaaS Business
   Components, but there are others... down below
3. _Neighborhood_ - This is information about the diagram as a metaphor for a
   neighborhood of buildings and roads that encompass information like layout,
   color theme, custom positions, etc.

## Future Facades

The Facade can also be switched out with:

- Scryr SaaS Infrastructure (SsiAws) - AWS deployment components
- Scryr SaaS Infrastructure (SSiGcP) - GCP deployment components
- Scryr Code Hiearchy (Sch) - Showing how code relates to business processes and
  more of a Doxygen view
