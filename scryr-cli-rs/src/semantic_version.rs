use std::fmt;
use std::str::FromStr;

#[derive(Debug, PartialEq, Eq)]
pub struct SemanticVersion {
    major: u64,
    minor: u64,
    patch: u64,
}

impl SemanticVersion {
    pub fn new(major: u64, minor: u64, patch: u64) -> Self {
        SemanticVersion {
            major,
            minor,
            patch,
        }
    }
}

impl fmt::Display for SemanticVersion {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}.{}.{}", self.major, self.minor, self.patch)
    }
}

impl FromStr for SemanticVersion {
    type Err = &'static str;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<&str> = s.split('.').collect();
        if parts.len() != 3 {
            return Err("Invalid semantic version format");
        }

        let major = parts[0]
            .parse::<u64>()
            .map_err(|_| "Invalid major version")?;
        let minor = parts[1]
            .parse::<u64>()
            .map_err(|_| "Invalid minor version")?;
        let patch = parts[2]
            .parse::<u64>()
            .map_err(|_| "Invalid patch version")?;

        Ok(SemanticVersion {
            major,
            minor,
            patch,
        })
    }
}
