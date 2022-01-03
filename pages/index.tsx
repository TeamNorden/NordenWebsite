import { RiLink } from "react-icons/ri";
import { Button, Center, Divider, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Center className="flex h-screen items-center justify-center">
        <Text m={"xl"} styles={{ letterSpacing: "5%" }} size={"xl"} weight={"bolder"}>
          Norden
          <Text size={"sm"}>
            (Made with <a href="https://mantine.dev/" style={{ color: "cyan" }}>Mantine</a>)
          </Text>
        </Text>
        <Divider orientation="vertical" />
        <Button component={"a"}
                color={"red"}
                href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                m={"xl"}
                leftIcon={<RiLink />}
                target="_blank"
                variant="outline">
          Rickroll Me
        </Button>
      </Center>
    </>
  );
}
