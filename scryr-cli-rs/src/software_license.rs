use std::str::FromStr;
use strum_macros::EnumString;

#[derive(Debug, PartialEq, EnumString)]
pub enum SoftwareLicense {
    #[strum(serialize = "MIT")]
    MIT,
    #[strum(serialize = "Apache-2.0")]
    Apache2_0,
    #[strum(serialize = "GPL-3.0")]
    GPLv3,
    #[strum(serialize = "LGPL-3.0")]
    LGPLv3,
    #[strum(serialize = "BSD-3-Clause")]
    BSD3Clause,
    #[strum(serialize = "BSD-2-Clause")]
    BSD2Clause,
    #[strum(serialize = "MPL-2.0")]
    MPL2_0,
    #[strum(serialize = "EPL-2.0")]
    EPL2_0,
    #[strum(serialize = "AGPL-3.0")]
    AGPLv3,
    #[strum(serialize = "Unlicensed")]
    Unlicensed,
    // Add more licenses as needed
}
