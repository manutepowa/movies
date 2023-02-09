export type NavLinkType = {
  name: string
  href: string
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
  >
  current: boolean
}
