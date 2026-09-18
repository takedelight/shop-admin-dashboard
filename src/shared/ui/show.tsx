interface ShowProps {
  children: React.ReactNode;
  when: boolean;
  fallback?: React.ReactNode;
}

export const Show = ({ children, when, fallback }: ShowProps) => {
  return when ? children : fallback;
};
