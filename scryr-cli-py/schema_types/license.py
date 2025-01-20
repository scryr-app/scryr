from enum import Enum


class SoftwareLicense(str, Enum):
    MIT = "MIT"
    APACHE_2_0 = "Apache 2.0"
    GPL_3_0 = "GPL 3.0"
    LGPL_3_0 = "LGPL 3.0"
    BSD_2_CLAUSE = "BSD 2-Clause"
    BSD_3_CLAUSE = "BSD 3-Clause"
    MPL_2_0 = "MPL 2.0"
    EPL_2_0 = "EPL 2.0"
    AGPL_3_0 = "AGPL 3.0"
    UNLICENSE = "Unlicense"
    CC0_1_0 = "CC0 1.0"
    ISC = "ISC"
