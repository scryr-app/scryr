use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize)]
struct Material {
    reflectivity: f32,
}

#[derive(Debug, Serialize, Deserialize)]
struct Entity {
    name: String,
    material: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct Scene {
    materials: HashMap<String, Material>,
    entities: Vec<Entity>,
}

pub fn main() {
    let data = r#"
    Scene(
        materials: {
            "metal": (
                reflectivity: 1.0,
            ),
            "plastic": (
                reflectivity: 0.5,
            ),
        },
        entities: [
            (
                nae: "hero",
                material: "metal",
            ),
            (
                name: "monster",
                material: "plastic",
            ),
        ],
    )
    "#;

    let scene: Scene = match ron::from_str(data) {
        Ok(scene) => scene,
        Err(e) => {
            println!("Failed to parse RON data: {}", e);
            return;
        }
    };
    println!("{:?}", scene);
}
