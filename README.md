# 🔮 Scryr

Actionable Architecture.


## Coding Concepts

There are 3 different layers to a scryr diagram

1. The Scryr cue file (Scf). This gets checked in and is plain text
   1. Can be embedded in markdown
   2. Can create a markdown readme
   3. useful for MCP
2. The Scryr SaaS Components (Ssc). This is the Scf enriched with additional display things, like technology framework icons
3. The Scryr House Model (Shm). This is the Ssc plus additional infromation, like layout, color theme, custom positions, etc.


```
SCF -- enriched with logos and frameworks --> SSC  --> enriched with colors and positions --> SHM
```
_FUTURE_
The SSC layer can also be switched out wit:
 - Scryr SaaS Infrastructure (SsiAws) - AWS deployment components
 - Scryr SaaS Infrastructure (SSiGcP) - GCP deployment components
 - Scryr Code Hiearchy (Sch) -  Showing how code relates to business processes and more of a Doxygen view