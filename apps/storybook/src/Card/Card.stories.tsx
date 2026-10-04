import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card, Input } from "@fe-design-systems/react";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The Card component is built on top of Ant Design and supports its standard features and states, including titles, subtitles, covers, actions, loading, hoverable, bordered, and different sizes.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: "Card",
  },
  parameters: {
    docs: {
      description: {
        story: "The Card component provides a flexible container for displaying content, with support for titles, subtitles, images, actions, loading states, hover interactions, and different sizes.",
      },
    },
  },
};

export const Basic: Story = {
  args: {
    title: "Card title",
    children: "Card content",
  },
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    width: 600,
    cover: (
      <img
        alt="Europe Street"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
    meta: {
      title: "Title",
      description: "This is the description",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 16,
        }}
      >
        Card Content
      </div>
    ),
  },
};

export const WithContent: Story = {
  args: {
    title: "Create an account",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" />
        <Button>Submit</Button>
      </div>
    ),
  },
};

export const WithMeta: Story = {
  args: {
    meta: {
      avatar: {
        src: "https://api.dicebear.com/10.x/lorelei/svg?seed=1",
      },
      title: "Object Card",
      description: "This is the description",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 16,
        }}
      >
        Card Content
      </div>
    ),
  },
};

export const WithMetaAndContent: Story = {
  args: {
    meta: {
      avatar: {
        src: "https://api.dicebear.com/10.x/lorelei/svg?seed=1",
      },
      title: "Object Card",
      description: "This is the description",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Enter something..." />
        <Button variant="primary">Submit</Button>
      </div>
    ),
  },
};

export const WithPictureAndMeta: Story = {
  args: {
    cover: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
    meta: {
      title: "Title",
      description: "description",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Enter your message" />
        <Button variant="primary">Submit</Button>
      </div>
    ),
  },
};

export const HorizontalWithPicture: Story = {
  args: {
    layout: "horizontal",
    width: 600,
    cover: (
      <img
        alt="Mountain landscape"
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
    title: "Mountain Escape",
    children: "Explore beautiful places and discover new experiences.",
  },
};

export const WithPictureAndAvatar: Story = {
  args: {
    cover: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
    meta: {
      avatar: {
        src: "https://api.dicebear.com/10.x/lorelei/svg?seed=1",
      },
      title: "Title",
      description: "description",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Enter your email" />
        <Button variant="secondary">Continue</Button>
      </div>
    ),
  },
};

export const HorizontalWithAvatar: Story = {
  args: {
    layout: "horizontal",
    width: 600,
    meta: {
      avatar: {
        src: "https://api.dicebear.com/10.x/lorelei/svg?seed=1",
      },
      title: "Jane Cooper",
      description: "Product Designer",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        A card with avatar.
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: "Card title",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Enter something..." />
        <Button variant="primary">Save</Button>
      </div>
    ),
    actions: ["Action 1", "Action 2", "Action 3"],
  },
};

export const CardInsideCard: Story = {
  args: {
    width: 600,
    title: "Project Overview",
    children: (
      <Card
        title="Project Details"
        variant="borderless"
        style={{
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div>
            <strong>Design System</strong>
            <div>Reusable components for web applications.</div>
          </div>

          <Button variant="primary">View Project</Button>
        </div>
      </Card>
    ),
  },
};

export const CardWithButton: Story = {
  args: {
    width: 400,
    title: "Create Account",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Input placeholder="Enter your email" />

        <Button variant="primary">Continue</Button>
      </div>
    ),
  },
};

export const HorizontalWithAvatarAndButton: Story = {
  args: {
    layout: "horizontal",
    width: 650,
    cover: (
      <img
        alt="Workspace"
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
    meta: {
      avatar: {
        src: "https://api.dicebear.com/10.x/lorelei/svg?seed=2",
      },
      title: "Design Team",
      description: "Frontend & Design System",
    },
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          MarginTop: 16,
        }}
      >
        <div>A reusable design system for building consistent interfaces.</div>

        <Button variant="primary">View Team</Button>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    title: "Card title",
    hoverable: true,
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Search..." />
        <Button>Search</Button>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    title: "Card title",
    loading: true,
  },
};

export const Small: Story = {
  args: {
    title: "Card title",
    size: "small",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 16,
        }}
      >
        <Input placeholder="Input" />
        <Button size="small">Submit</Button>
      </div>
    ),
  },
};

export const Borderless: Story = {
  args: {
    title: "Card title",
    bordered: false,
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Input" />
        <Button>Submit</Button>
      </div>
    ),
  },
};

export const CustomSize: Story = {
  args: {
    title: "Card title",
    width: 400,
    height: 250,
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Input placeholder="Enter your email" />
        <Button variant="primary">Submit</Button>
      </div>
    ),
  },
};
