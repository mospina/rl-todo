declare namespace Togglable {
  type Togglable = {
    buttonLabel: string;
    children: ReactNode;
  };

  type TogglableRef = {
    toggleVisibility: () => void;
  };
}
