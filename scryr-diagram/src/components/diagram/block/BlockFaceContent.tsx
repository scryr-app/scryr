import { Text } from "@react-three/drei";
import { currentDiagramTheme } from "../../../theme/index.ts";

export function BlockFaceContent({
    description,
    sourceCodeUrl,
    version,
}: {
    description?: string;
    version?: string;
    sourceCodeUrl?: string;
}) {
    // Compose block face content with labels for each present field
    let blockFaceContent = "";
    if (description) blockFaceContent += `Description: ${description}\n`;
    if (version) blockFaceContent += `Version: ${version}\n`;
    // Remove sourceCodeUrl from blockFaceContent, will render as link below

    return (
        <Text
            position={[0, 0.1, 0.51]}
            rotation={[0, 0, 0]}
            fontSize={0.10}
            color={currentDiagramTheme.fontColor}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.8}
            textAlign="center"
        >
            {blockFaceContent}
            {sourceCodeUrl && (
                <Text
                    fontSize={0.09}
                    onClick={() => window.open(sourceCodeUrl, "_blank")}
                >
                    Source: {sourceCodeUrl}
                </Text>
            )}
        </Text>
    );
}
