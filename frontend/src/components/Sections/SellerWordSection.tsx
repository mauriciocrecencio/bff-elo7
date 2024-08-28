import { Image } from '../ui/Image';
import Section from '../ui/Section';

export function SellerWordSection() {
  return (
    <Section className="items-start bg-gray-bg md:grid md:grid-cols-2 md:flex-row md:gap-10">
      <Image
        alt="Mulher concentrada trabalhando com artesanato"
        className="max-h-[264px] w-full rounded-2xl object-cover"
        src="/images/worker-woman.jpeg"
      />
      <div className="md:text">
        <h2 className="mt-10 text-[26px] font-semibold leading-8 text-gray-500 md:mt-0">Palavra da vendedora</h2>
        <h3 className="mt-1 text-xl font-semibold leading-6 text-yellow">Sed rutrum condimentum</h3>
        <p className="mt-6 text-gray-100 md:text-pretty md:text-xl md:leading-[30px]">
          Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam
          consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus
          vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam
          augue, in congue neque nulla vehicula purus.
        </p>
      </div>
    </Section>
  );
}
