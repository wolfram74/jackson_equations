var equations = [

  {
    equation:`
    \\nabla \\cdot \\vec D = \\rho \\\\
    \\nabla \\times \\vec H - \\frac{\\partial \\vec D}{\\partial t}= \\vec J \\\\
    \\nabla \\times \\vec E + \\frac{\\partial \\vec B}{\\partial t}= 0 \\\\
    \\nabla \\cdot \\vec B = 0
    `,
    id:"00.001",
    bookPage:"2",
    label:"Maxwell's Equations",
    description:"D and H are scalar multiples of E and B in vacuum.",
  },

  {
    equation:`
    \\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot \\vec J = 0
    `,
    id:"00.002",
    bookPage:"3",
    label:"Continuity of Charge",
    description:"NA",
  },

  {
    equation:`\\vec F = q(\\vec E + \\vec v \\times \\vec B)`,
    id:"00.003",
    bookPage:"3",
    label:"Lorentz Force Law",
    description:"NA",
  },

  {
    equation:`\\frac{\\epsilon}{\\epsilon_0} = \\frac{\\mu_0}{\\mu}=
    [1+\\frac{1}{b^2}(c^2B^2-E^2)]^{-1/2}

    `,
    id:"00.004",
    bookPage:"10",
    label:"Born-Infield Theory",
    description:"NA",
  },

  {
    equation:`
    \\epsilon_{ik} = \\delta_{ik} + \\frac{e_G^4\\hbar}{45\\pi m^4 c ^7}[
      2(E^2-c^2B^2)\\delta_ik + 7c^2B_iB_k] + ... \\\\
    \\mu_{ik} = \\delta_{ik} + \\frac{e_G^4\\hbar}{45\\pi m^4 c ^7}[
      2(c^2B^2-E^2)\\delta_ik + 7E_iE_k] + ...
    `,
    id:"00.005",
    bookPage:"11",
    label:"Vacuum permeability tensors",
    description:"NA",
  },

  {
    equation:`V(r) = \\hbar c \\frac{Z_1Z_2\\alpha}{r}
    [
    1+\\frac{2\\alpha}{3\\pi}\\int^\\infty_{2m}d\\kappa
    \\frac{\\sqrt{\\kappa^2-4m^2}}{\kappa^2}(1+\\frac{2m^2}{\\kappa^2})e^{-\\kappa r}
    ]`,
    id:"00.006",
    bookPage:"12",
    label:"QED correction to coulomb potential",
    description:"NA",
  },

  {
    equation:`\\tilde V (Q^2) = \\frac{4\\pi Z_1 Z_2 \\alpha(Q^2)}{Q^2}`,
    id:"00.007",
    bookPage:"12",
    label:"Spatial Fourier Transform of interaction Energy",
    description:"NA",
  },

  {
    equation:`[\\alpha(Q^2)]^{-1}\\approx \\frac{1}{\\alpha(0)} - \\frac{1}{3\\pi} ln( \\frac{Q^2}{m^2e^{5/3}})`,
    id:"00.008",
    bookPage:"12",
    label:"Reciprocal running coupling constant",
    description:"NA",
  },

  {
    equation:`
    D_\\alpha = \\epsilon_0E_\\alpha+(P_\\alpha - \\Sigma_\\beta \\frac{\\partial Q'_{\\alpha\\beta}}{\\partial x_\\beta}+...)\\\\
    H_\\alpha = \\frac{1}{\\mu_0}E_\\alpha+(M_\\alpha +...)
    `,//'
    id:"00.009",
    bookPage:"13",
    label:"Electric displacement D and magnetic field H",
    description:"NA",
  },

  {
    equation:`
    D_\\alpha = \\Sigma_\\beta \\epsilon_{\\alpha\\beta}E_\\beta \\\\
    H_\\alpha = \\Sigma_\\beta \\mu'_{\\alpha\\beta}B_\\beta
    `,//'
    id:"00.010",
    bookPage:"14",
    label:"Linear response form",
    description:"NA",
  },

  {
    equation:`D_\\alpha(\\vec k, \\omega) = \\Sigma_\\beta \\epsilon_{\\alpha\\beta}(\\vec k, \\omega)D_\\alpha(\\vec k, \\omega)`,
    id:"00.011",
    bookPage:"15",
    label:"Electric displacement expressed as interpolation of permeability and field.",
    description:"NA",
  },

  {
    equation:`D_\\alpha= \\Sigma_\beta \\epsilon_{\\alpha\\beta}^{(1)} E_\\beta
    + \\Sigma_{\\beta,\\gamma}\\epsilon_{\\alpha\\beta\\gamma}^{(2)}E_\\beta E_\\gamma + ...`,
    id:"00.012",
    bookPage:"16",
    label:"Example of non-linear terms in high field media",
    description:"NA",
  },

  {
    equation:`\\oint_S \\vec D \\cdot \\vec n da = \\int_V \\rho d^3x`,
    id:"00.013",
    bookPage:"16",
    label:"Integral form of Gausses law",
    description:"NA",
  },

  {
    equation:"\\oint_S \\vec D \\cdot \\vec n da = 0",
    id:"00.014",
    bookPage:"16",
    label:"No monopole equation",
    description:"NA",
  },

  {
    equation:`\\oint_c \\vec H \\cdot d\\vec l =
    \\int_S'[\\vec J + \\frac{\\partial \\vec D}{\\partial t}]\\cdot \\vec n' da`,
    id:"00.015",
    bookPage:"17",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"00.016",
    bookPage:"17",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"00.017",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"00.018",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"00.019",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"00.020",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },
]
