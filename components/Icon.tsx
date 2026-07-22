import {
  Wrench,
  Gauge,
  Truck,
  Cog,
  Settings,
  CircuitBoard,
  GitBranch,
  Layers,
  ShieldCheck,
  Target,
  Rocket,
  Car,
  Phone,
  MapPin,
  Mail,
  Clock,
  Droplet,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  Wrench,
  Gauge,
  Truck,
  Cog,
  Settings,
  CircuitBoard,
  GitBranch,
  Layers,
  ShieldCheck,
  Target,
  Rocket,
  Car,
  Phone,
  MapPin,
  Mail,
  Clock,
  Droplet,
};

export type IconName = keyof typeof ICONS;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
