import { cn } from '@/lib/utils';
import * as HoverCard from '@radix-ui/react-hover-card';
import { cva } from 'class-variance-authority';

const contentStyles = cva(
  'absolute z-10 p-4 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 transition-opacity duration-300',
  {
    variants: {
      visible: {
        true: 'opacity-100',
      },
      hidden: {
        true: 'opacity-0',
      },
    },
  }
);

const arrowStyles = 'fill-white';

interface HoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

const HoverCardComponent: React.FC<HoverCardProps> = ({ trigger, content }) => (
  <HoverCard.Root>
    <HoverCard.Trigger className="cursor-pointer">
      {trigger}
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className={cn(contentStyles({ visible: true }))}
      >
        {content}
        <HoverCard.Arrow className={arrowStyles} />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardComponent;
