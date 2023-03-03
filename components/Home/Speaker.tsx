import Image from 'next/image';
import Link from 'next/link';
interface PropsInterface {
    image: string;
    // topic: string;
    name: string;
    title: string;
}

function Speaker(props: PropsInterface) {
    const { image, name, title } = props;

    return (
        <Link className="flex-1" href={`/speakers/${image}`}>
            <div className="bg-gray-300 aspect-square my-5 relative overflow-hidden">
                <Image
                    fill
                    alt="speaker"
                    className="object-cover"
                    src={`/images/speakers/${image}`}
                />
            </div>
            <p className="text-redted">TOPIC</p>
            <p className="font-bold my-[1px]">{name}</p>
            <p className="text-gray-500">
                <i>{title}</i>
            </p>
            <hr className="my-10 h-[1px] bg-gray-300" />
        </Link>
    );
}

export default Speaker;
