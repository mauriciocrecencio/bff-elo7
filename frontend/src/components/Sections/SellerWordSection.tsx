import { Image } from "../ui/Image";
import Section from "../ui/Section";

export function SellerWordSection() {
  return (
    <Section className="items-start bg-gray-bg md:flex-row md:grid md:grid-cols-2 md:gap-10">
      <Image
        alt="Mulher concentrada trabalhando com artesanato"
        className="rounded-2xl max-h-[264px] w-full object-cover"
        src="/images/worker-woman.jpeg"
      />
      <div className="md:text">
        <h2 className="mt-10 md:mt-0 text-[26px] font-semibold leading-8 text-gray-500">
          Palavra da vendedora
        </h2>
        <h3 className="text-yellow text-xl leading-6 mt-1 font-semibold">
          Sed rutrum condimentum
        </h3>
        <p className="mt-6 text-gray-100 md:text-xl md:leading-[30px] md:text-pretty">
          Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
          malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed
          id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque
          finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam
          mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue
          neque nulla vehicula purus.
        </p>
      </div>
    </Section>
  );
}
