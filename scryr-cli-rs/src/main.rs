extern crate url;

use std::str::FromStr;
use url::Url;

pub mod basic;
mod programming_languages;
mod semantic_version;
mod software_framework;
mod software_license;

use programming_languages::ProgrammingLanguage;
use semantic_version::SemanticVersion;
use software_framework::SoftwareFramework;
use software_license::SoftwareLicense;

#[derive(Debug)]
struct Component {
    name: String,
    icon: String,
    description: String,
    version: SemanticVersion,
    repository: Url,
    docs_url: Url,
    license: SoftwareLicense,
    monitoring_urls: Vec<Url>,
    programming_languages: Vec<ProgrammingLanguage>,
    frameworks: Vec<SoftwareFramework>,
    connections: Vec<Component>,
}

impl Default for Component {
    fn default() -> Self {
        Component {
            name: "Default Name".to_string(),
            icon: "default_icon.png".to_string(),
            description: "Default Description".to_string(),
            version: SemanticVersion::from_str("0.1.0").unwrap(),
            repository: Url::parse("https://default.repo").unwrap(),
            docs_url: Url::parse("https://default.docs").unwrap(),
            license: SoftwareLicense::Unlicensed,
            monitoring_urls: vec![],
            programming_languages: vec![],
            frameworks: vec![],
            connections: vec![],
        }
    }
}

struct ComponentBuilder {
    component: Component,
}

impl ComponentBuilder {
    fn new() -> Self {
        ComponentBuilder {
            component: Component::default(),
        }
    }

    fn name(mut self, name: &str) -> Self {
        self.component.name = name.to_string();
        self
    }

    fn icon(mut self, icon: &str) -> Self {
        self.component.icon = icon.to_string();
        self
    }

    fn description(mut self, description: &str) -> Self {
        self.component.description = description.to_string();
        self
    }

    fn version(mut self, version: &str) -> Result<Self, Box<dyn std::error::Error>> {
        self.component.version = version.parse::<SemanticVersion>()?;
        Ok(self)
    }

    fn repository(mut self, repository: &str) -> Result<Self, Box<dyn std::error::Error>> {
        self.component.repository = Url::parse(repository)?;
        Ok(self)
    }

    fn docs_url(mut self, docs_url: &str) -> Result<Self, Box<dyn std::error::Error>> {
        self.component.docs_url = Url::parse(docs_url)?;
        Ok(self)
    }

    fn license(mut self, license: SoftwareLicense) -> Self {
        self.component.license = license;
        self
    }

    fn monitoring_urls(
        mut self,
        monitoring_urls: Vec<&str>,
    ) -> Result<Self, Box<dyn std::error::Error>> {
        self.component.monitoring_urls = monitoring_urls
            .into_iter()
            .map(Url::parse)
            .collect::<Result<Vec<_>, _>>()?;
        Ok(self)
    }

    fn programming_languages(mut self, programming_languages: Vec<ProgrammingLanguage>) -> Self {
        self.component.programming_languages = programming_languages;
        self
    }

    fn frameworks(mut self, frameworks: Vec<SoftwareFramework>) -> Self {
        self.component.frameworks = frameworks;
        self
    }

    fn connections(mut self, connections: Vec<Component>) -> Self {
        self.component.connections = connections;
        self
    }

    fn build(self) -> Component {
        self.component
    }
}

use serde::{Deserialize, Serialize};
fn main() {
    basic::main();

    let hiDb = ComponentBuilder::new()
        .name("HiDB")
        .icon("hiedb.png")
        .description("A high-performance database")
        .version("1.0.0")
        .unwrap()
        .build();

    let testComp = ComponentBuilder::new()
        .name("TestComponent")
        .icon("test_icon.png")
        .description("This is a test component")
        .version("1.0.0")
        .unwrap()
        .repository("https://google.com")
        .unwrap()
        .docs_url("https://docs.google.com")
        .unwrap()
        .license(SoftwareLicense::MIT)
        .monitoring_urls(vec!["https://monitoring.url"])
        .unwrap()
        .programming_languages(vec![ProgrammingLanguage::Rust])
        .frameworks(vec![SoftwareFramework::Django])
        .connections(vec![hiDb])
        .build();

    println!("{:?}", testComp);
}
